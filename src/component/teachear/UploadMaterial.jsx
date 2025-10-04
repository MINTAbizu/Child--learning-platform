import React, { useState } from 'react';
import axios from 'axios';

function UploadMaterial() {
  const [form, setForm] = useState({
    grade: '',
    type: '',
    content: '',
    url: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('grade', form.grade);
    data.append('type', form.type);
    data.append('content', form.content);
    data.append('url', form.url);
    if (file) data.append('file', file);

    try {
      await axios.post('http://localhost:3000/api/material/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Material uploaded!');
      setForm({ grade: '', type: '', content: '', url: '' });
      setFile(null);
    } catch (err) {
      alert('Upload failed');
    }
  };

  return (
    <div className="container py-4">
      <h2>Upload Teaching Material</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Grade</label>
          <input name="grade" className="form-control" value={form.grade} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Type</label>
          <select name="type" className="form-select" value={form.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="note">Note</option>
            <option value="video">Video</option>
            <option value="material">Material</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Note/Description</label>
          <input name="content" className="form-control" value={form.content} onChange={handleChange} />
        </div>
        {form.type === 'video' && (
          <div className="col-md-12">
            <label className="form-label">Video URL</label>
            <input name="url" className="form-control" value={form.url} onChange={handleChange} />
          </div>
        )}
        {form.type === 'material' && (
          <div className="col-md-12">
            <label className="form-label">Upload File</label>
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>
        )}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default UploadMaterial;