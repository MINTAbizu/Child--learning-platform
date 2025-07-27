// Example component for a live class session
import React from 'react';

function LiveClassSession() {
  return (
    <div className="container my-4">
      <h2>Live Class Session</h2>
      <iframe
        src="https://meet.jit.si/YourClassRoomName"
        style={{ width: '100%', height: '500px', border: 0 }}
        allow="camera; microphone; fullscreen; display-capture"
        title="Live Class"
      />
    </div>
  );
}

export default LiveClassSession;