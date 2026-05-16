import { useLocation, useNavigate } from "react-router-dom";

export default function VideoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const video = location.state?.video;

  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative">
      
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white border px-4 py-1 rounded-full hover:bg-white hover:text-black"
      >
        Back
      </button>

      {video ? (
        <video
          src={video}
          controls
          autoPlay
          className="max-h-[90vh] max-w-[95vw] object-contain"
        />
      ) : (
        <p className="text-white">No video found</p>
      )}
    </div>
  );
}