import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [contents, setContents] = useState([]);
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [newContent, setNewContent] = useState({
        title: '',
        description: '',
        type: '',
        gradeLevel: '',
        file: null,
        videoUrl: ''
    });
    const [selectedContentId, setSelectedContentId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('upload');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [messageFilter, setMessageFilter] = useState('all'); // 'all', 'unread', 'replied'
    const [replyTemplate, setReplyTemplate] = useState('custom'); // 'custom' or predefined templates
    const [attachments, setAttachments] = useState(null);
    const [replyStatus, setReplyStatus] = useState('');
    const [error, setError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [messageStats, setMessageStats] = useState({
        total: 0,
        unread: 0,
        replied: 0
    });
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Predefined reply templates
    const replyTemplates = {
        custom: '',
        greeting: "Thank you for contacting us. ",
        followUp: "We have received your message and will get back to you shortly. ",
        resolved: "Your issue has been resolved. Please let us know if you need anything else. ",
        apology: "We apologize for any inconvenience caused. "
    };

    useEffect(() => {
        fetchContents();
        fetchMessages();
        fetchUsers();
    }, []);

    const fetchContents = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Api/content');
            if (response.data) {
                setContents(response.data);
            }
        } catch (error) {
            console.error('Error fetching contents:', error);
            alert('Error fetching contents');
        }
    };

    const fetchMessages = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:9000/Api/messages/all');
            console.log('Messages response:', response.data); // Debug log
            
            if (response.data && Array.isArray(response.data.messages)) {
                setMessages(response.data.messages);
                setMessageStats({
                    total: response.data.messages.length,
                    unread: response.data.messages.filter(m => m.status === 'pending').length,
                    replied: response.data.messages.filter(m => m.status === 'replied').length
                });
            } else {
                setMessages([]);
                setMessageStats({ total: 0, unread: 0, replied: 0 });
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
            setError('Failed to fetch messages. Please try again later.');
            setMessages([]);
            setMessageStats({ total: 0, unread: 0, replied: 0 });
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get('http://localhost:3000/admin/getstudent');
            if (Array.isArray(response.data)) {
                setUsers(response.data);
            } else {
                setUsers([]);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('Failed to fetch users. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create local storage URL for video preview
            const fileUrl = URL.createObjectURL(file);
            setNewContent({ 
                ...newContent, 
                file: file,
                videoUrl: file.type.startsWith('video/') ? fileUrl : ''
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContent({ ...newContent, [name]: value });
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            if (!newContent.file) {
                throw new Error('Please select a file to upload');
            }

            const formData = new FormData();
            formData.append('title', newContent.title);
            formData.append('description', newContent.description);
            formData.append('type', newContent.type);
            formData.append('gradeLevel', newContent.gradeLevel);
            formData.append('file', newContent.file);

            console.log('Uploading content...', {
                title: newContent.title,
                type: newContent.type,
                fileSize: newContent.file.size
            });


            const response = await axios.post(
                'http://localhost:3000/contentuploads', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        console.log('Upload progress:', percentCompleted + '%');
                    }
                }
            );

            if (response.data.success) {
                alert('Content uploaded successfully!');
                setNewContent({ 
                    title: '', 
                    description: '', 
                    type: '', 
                    gradeLevel: '', 
                    file: null,
                    videoUrl: ''
                });
                fetchContents(); // Refresh the content list
            }
        } catch (error) {
            console.error('Error uploading content:', error);
            alert('Error uploading content: ' + 
                (error.response?.data?.error || error.response?.data?.details || error.message));
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateUserStatus = async (userId, newStatus) => {
        try {
            await axios.put(`http://localhost:9000/Api/users/${userId}/status`, {
                status: newStatus
            });
            
            // Update the local state after successful update
            setUsers(users.map(user => 
                user.user_id === userId 
                    ? { ...user, status: newStatus } 
                    : user
            ));
            
            alert('User status updated successfully');
        } catch (error) {
            console.error('Error updating user status:', error);
            alert('Failed to update user status: ' + (error.response?.data?.error || error.message));
        }
    };

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`http://localhost:9000/Api/users/${userId}`);
                // Update the local state after successful deletion
                setUsers(users.filter(user => user.user_id !== userId));
                alert('User deleted successfully');
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Failed to delete user: ' + (error.response?.data?.error || error.message));
            }
        }
    };

    const handleUpdateContent = async (contentId) => {
        try {
            const formData = new FormData();
            for (const key in newContent) {
                formData.append(key, newContent[key]);
            }
            await axios.put(`http://localhost:9000/content/${contentId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchContents();
            alert('Content updated successfully!');
        } catch (error) {
            console.error('Error updating content:', error);
            alert('Error updating content.');
        }
    };

    const handleRemoveContent = async () => {
        try {
            // Remove video data and metadata from localStorage
            const videos = JSON.parse(localStorage.getItem('videos') || '[]');
            const updatedVideos = videos.filter(video => video.id !== selectedContentId);
            
            localStorage.removeItem(selectedContentId); // Remove video data
            localStorage.setItem('videos', JSON.stringify(updatedVideos)); // Update metadata
            
            setSelectedContentId(null);
            fetchContents();
            alert('Content removed successfully!');
        } catch (error) {
            console.error('Error removing content:', error);
            alert('Error removing content.');
        }
    };

    const handleReplySubmit = async (messageId) => {
        try {
            setIsLoading(true);
            await axios.post(`http://localhost:9000/Api/messages/reply/${messageId}`, {
                message_reply: replyText,
                status: 'replied'
            });
            
            // Update local state
            setMessages(messages.map(msg => 
                msg.id === messageId 
                    ? { ...msg, message_reply: replyText, status: 'replied' } 
                    : msg
            ));
            
            setReplyText('');
            setSelectedMessage(null);
            setSelectedTemplate('');
            alert('Reply sent successfully!');
            
            // Refresh messages to update statistics
            fetchMessages();
        } catch (error) {
            console.error('Error sending reply:', error);
            alert('Failed to send reply: ' + (error.response?.data?.error || error.message));
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteMessage = async (messageId) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await axios.delete(`http://localhost:9000/Api/messages/${messageId}`);
                setMessages(messages.filter(msg => msg._id !== messageId));
                alert('Message deleted successfully');
            } catch (error) {
                console.error('Error deleting message:', error);
                alert('Failed to delete message');
            }
        }
    };

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
        setReplyText(replyTemplates[template] + replyText);
    };

    const handleAttachmentChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
            setAttachments(file);
        } else {
            alert('File size should be less than 5MB');
            e.target.value = '';
        }
    };

    // Filter users based on search term
    const filteredUsers = users.filter(user => 
        user.user_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.user_email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredMessages = messages.filter(message => {
        if (messageFilter === 'unread') return message.status === 'pending';
        if (messageFilter === 'replied') return message.status === 'replied';
        return true; // 'all' filter
    }).filter(message => 
        message.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (activeTab === 'users') {
            fetchUsers();
        }
    }, [activeTab]);

    useEffect(() => {
        if (activeTab === 'messages') {
            fetchMessages();
        }
    }, [activeTab]);

    useEffect(() => {
        if (activeTab === 'content') {
            fetchContents();
        }
    }, [activeTab]);

    // Add this function to handle content deletion
    const handleDeleteContent = async (contentId) => {
        if (window.confirm('Are you sure you want to delete this content?')) {
            try {
                const response = await axios.delete(`http://localhost:9000/Api/content/${contentId}`);
                if (response.data.success) {
                    alert('Content deleted successfully');
                    // Refresh the content list
                    fetchContents();
                }
            } catch (error) {
                console.error('Error deleting content:', error);
                alert('Failed to delete content: ' + (error.response?.data?.error || error.message));
            }
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>   
                </div>
                <div className="sidebar-menu">
                    <button 
                        className={`menu-item ${activeTab === 'upload' ? 'active' : ''}`}
                        onClick={() => setActiveTab('upload')}
                    >
                        Upload Content
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        User Management
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'content' ? 'active' : ''}`}
                        onClick={() => setActiveTab('content')}
                    >
                        Existing Content
                    </button>
                    <button 
                        className={`menu-item ${activeTab === 'messages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('messages')}
                    >
                        Messages
                    </button>
                </div>
            </div>

            <div className="main-content">
                <h1>Admin Dashboard</h1> 
                <Link to={'/Logout'}> <button> Logout</button></Link>
                {activeTab === 'upload' && (
                    <div className="content-section">
                        <h2>Upload New Content</h2>
                        <form onSubmit={handleUpload}>
                            <input
                            style={{width:'50%'}}
                            
                            type="text" name="title" placeholder="Title" value={newContent.title} onChange={handleInputChange} required />
                            <textarea name="description" placeholder="Description" value={newContent.description} onChange={handleInputChange} required />
                            <select name="type" value={newContent.type} onChange={handleInputChange} required>
                                <option value="">Select Type</option>
                                <option value="video">Video</option>
                                <option value="document">Document</option>
                                <option value="image">Image</option>
                            </select>
                            <input
                            style={{width:'50%'}} 
                            type="number" name="gradeLevel" placeholder="Grade Level" value={newContent.gradeLevel} onChange={handleInputChange} required />
                            <input 
                                type="file" 
                                name="file" 
                                onChange={handleFileChange} 
                                accept="video/*,.pdf,.doc,.docx,image/*"
                                required 
                            />
                            {loading && <p>Uploading...</p>}
                            <button type="submit" disabled={loading}>Upload</button>
                        </form>
                    </div>
                )}

               {activeTab === 'users' && (
    <div className="content-section">
        <h2 className="section-title">User Management</h2>
        
        <div className="user-management-controls">
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>

        {loading ? (
            <div className="loading-message">Loading users...</div>
        ) : error ? (
            <div className="error-message">{error}</div>
        ) : (
            <div className="table-responsive">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="no-data">No users found</td>
                            </tr>
                        ) : (
                            users.filter(user =>
                                user.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                user.email.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map(user => (
                                <tr key={user._id}>
                                    <td>{user.fname}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <select
                                            value={user.status || 'active'}
                                            onChange={(e) => handleUpdateUserStatus(user._id, e.target.value)}
                                            className="status-select"
                                        >
                                            <option value="active">Active</option>
                                            <option value="suspended">Suspended</option>
                                            <option value="blocked">Blocked</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="delete-button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        )}
    </div>
)}{activeTab === 'users' && (
    <div className="content-section">
        <h2 className="section-title">User Management</h2>
        
        <div className="user-management-controls">
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
        </div>

        {loading ? (
            <div className="loading-message">Loading users...</div>
        ) : error ? (
            <div className="error-message">{error}</div>
        ) : (
            <div className="table-responsive">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Grade</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="no-data">No users found</td>
                            </tr>
                        ) : (
                            users.filter(user =>
                                user.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                user.email.toLowerCase().includes(searchTerm.toLowerCase())
                            ).map(user => (
                                <tr key={user._id}>
                                    <td>{user.fname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.grade}</td>
                                    <td>
                                        <select
                                            value={user.status || 'active'}
                                            onChange={(e) => handleUpdateUserStatus(user._id, e.target.value)}
                                            className="status-select"
                                        >
                                            <option value="active">Active</option>
                                            <option value="suspended">Suspended</option>
                                            <option value="blocked">Blocked</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="delete-button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        )}
    </div>
)}














                {activeTab === 'content' && (
                    <div className="content-section">
                        <h2>Content Management</h2>
                        
                        {/* Upload Form */}
                        <form onSubmit={handleUpload} className="upload-form">
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Title" 
                                value={newContent.title} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <textarea 
                                name="description" 
                                placeholder="Description" 
                                value={newContent.description} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <select 
                                name="type" 
                                value={newContent.type} 
                                onChange={handleInputChange} 
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="video">Video</option>
                                <option value="document">Document</option>
                                <option value="image">Image</option>
                            </select>
                            <input 
                                type="text" 
                                name="gradeLevel" 
                                placeholder="Grade Level" 
                                value={newContent.gradeLevel} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <input 
                                type="file" 
                                onChange={handleFileChange} 
                                accept="video/*,image/*,.pdf,.doc,.docx" 
                                required 
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? 'Uploading...' : 'Upload Content'}
                            </button>
                        </form>

                        {/* Content List */}
                        <div className="content-list">
                            {contents.map(content => (
                                <div key={content.content_id} className="content-card">
                                    <h3>{content.content_title}</h3>
                                    <p>{content.content_description}</p>
                                    <p>Type: {content.content_type}</p>
                                    <p>Grade Level: {content.grade_level}</p>
                                    
                                    {/* Display content based on type */}
                                    {content.content_type === 'video' && (
                                        <video width="320" height="240" controls>
                                            <source src={content.fileUrl} type={content.file_type} />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    {content.content_type === 'image' && (
                                        <img 
                                            src={content.fileUrl} 
                                            alt={content.content_title} 
                                            style={{ maxWidth: '320px' }} 
                                        />
                                    )}
                                    {content.content_type === 'document' && (
                                        <a 
                                            href={content.fileUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            View Document
                                        </a>
                                    )}
                                    
                                    <div className="content-actions">
                                        <button 
                                            onClick={() => handleDeleteContent(content.content_id)}
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="content-section">
                        <h2>Message Management</h2>
                        
                        {/* Message Statistics */}
                        <div className="message-stats">
                            <div className="stat-box">
                                <h4>Total Messages</h4>
                                <span>{messageStats.total}</span>
                            </div>
                            <div className="stat-box unread">
                                <h4>Unread</h4>
                                <span>{messageStats.unread}</span>
                            </div>
                            <div className="stat-box replied">
                                <h4>Replied</h4>
                                <span>{messageStats.replied}</span>
                            </div>
                        </div>

                        {/* Message Filters */}
                        <div className="message-controls">
                            <select 
                                value={messageFilter}
                                onChange={(e) => setMessageFilter(e.target.value)}
                                className="message-filter"
                            >
                                <option value="all">All Messages</option>
                                <option value="unread">Unread Messages</option>
                                <option value="replied">Replied Messages</option>
                            </select>

                            {/* Search Messages */}
                            <input
                                type="text"
                                placeholder="Search messages..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="message-search"
                            />
                        </div>

                        {/* Messages List */}
                        <div className="messages-container">
                            {isLoading ? (
                                <div className="loading">Loading messages...</div>
                            ) : filteredMessages.length === 0 ? (
                                <div className="no-messages">No messages found</div>
                            ) : (
                                filteredMessages.map(message => (
                                    <div key={message.id} 
                                         className={`message-card ${message.status || 'unread'}`}>
                                        <div className="message-header">
                                            <span className="user-info">
                                                From: {message.name} ({message.email})
                                            </span>
                                            <span className="message-date">
                                                {new Date(message.created_at).toLocaleString()}
                                            </span>
                                        </div>
                                        
                                        <div className="message-content">
                                            <p>{message.message}</p>
                                        </div>

                                        {message.message_reply && (
                                            <div className="reply-content">
                                                <strong>Your Reply:</strong>
                                                <p>{message.message_reply}</p>
                                                <span className="reply-date">
                                                    Replied on: {new Date(message.reply_date).toLocaleString()}
                                                </span>
                                            </div>
                                        )}

                                        {/* Reply Form */}
                                        {selectedMessage === message.id && !message.message_reply && (
                                            <div className="reply-form">
                                                <div className="template-selector">
                                                    <select
                                                        value={selectedTemplate}
                                                        onChange={(e) => handleTemplateSelect(e.target.value)}
                                                    >
                                                        <option value="">Select Template</option>
                                                        <option value="greeting">Greeting</option>
                                                        <option value="followUp">Follow Up</option>
                                                        <option value="resolved">Resolved</option>
                                                        <option value="apology">Apology</option>
                                                    </select>
                                                </div>

                                                <textarea
                                                    value={replyText}
                                                    onChange={(e) => setReplyText(e.target.value)}
                                                    placeholder="Type your reply..."
                                                    rows="3"
                                                />
                                                
                                                <div className="reply-actions">
                                                    <button 
                                                        onClick={() => handleReplySubmit(message.id)}
                                                        disabled={isLoading || !replyText.trim()}
                                                        className="send-reply-btn"
                                                    >
                                                        {isLoading ? 'Sending...' : 'Send Reply'}
                                                    </button>
                                                    <button 
                                                        onClick={() => {
                                                            setSelectedMessage(null);
                                                            setReplyText('');
                                                            setSelectedTemplate('');
                                                        }}
                                                        className="cancel-btn"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        <div className="message-actions">
                                            {!message.message_reply && (
                                                <button 
                                                    onClick={() => setSelectedMessage(message.id)}
                                                    className="reply-btn"
                                                >
                                                    Reply
                                                </button>
                                            )}
                                            <button 
                                                onClick={() => handleDeleteMessage(message.id)}
                                                className="delete-btn"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;