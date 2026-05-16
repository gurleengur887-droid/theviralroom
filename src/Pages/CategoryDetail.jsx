import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import ReelViewer from "../Components/ReelViewer";
import SocialShowcase from "../Components/SocialShowcase";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import DesignShowcase from "../Components/DesignShowcase";
// VIDEOS
import eduVideo from "../Assets/Videos/edu.mp4";
import educationVideo from "../Assets/Videos/education.mp4";
import eventVideo from "../Assets/Videos/event.mp4";
import furnitureVideo from "../Assets/Videos/furnitureshoot.mp4";
import influencerVideo from "../Assets/Videos/influencer.mp4";
import promoVideo from "../Assets/Videos/promotion.mp4";
import video3 from "../Assets/Videos/video3.mp4";
import video4 from "../Assets/Videos/video4.mp4";
import video5 from "../Assets/Videos/video5.mp4";
import video6 from "../Assets/Videos/video6.mp4";
import video7 from "../Assets/Videos/video7.mp4";
import video8 from "../Assets/Videos/video8.mp4";
import video9 from "../Assets/Videos/video9.mp4";
import video10 from "../Assets/Videos/video10.mp4";
import video11 from "../Assets/Videos/video11.mp4";
import video12 from "../Assets/Videos/video12.mp4";
import video13 from "../Assets/Videos/video13.mp4";
import video14 from "../Assets/Videos/video14.mp4";
import video15 from "../Assets/Videos/video15.mp4";
import video16 from "../Assets/Videos/video16.mp4";
import video17 from "../Assets/Videos/video17.mp4";
// IMAGES




const data = {
  content: [
    { id: "edu", title: "Educational Reel & Edit",  video: eduVideo },
    { id: "education", title: "Educational Reel & Edit",  video: educationVideo },
    { id: "promo", title: "Promotional Reel & Edit",  video: promoVideo },
     { id: "new4", title: "Promotional Reel & Edit",  video: video3 },
      { id: "new13", title: "Event Reel & Edit",  video: video12 },
       { id: "new14", title: "Storytelling Reel & Edit",  video: video13 },
        { id: "new16", title: "Documentary Reel & Edit",  video: video15 },
     
  ],
  shoots: [
    { id: "event", title: "Event Shoot & Edit",  video: eventVideo },
    { id: "furniture", title: "Furniture Shoot & Edit",  video: furnitureVideo },
     { id: "new5", title: "Onsite Shoot & Edit", video: video4 },
   { id: "new6", title: "Exibhition Shoot & Edit", video: video5 },  
   { id: "new7", title: "Furniture Shoot & Edit", video: video6 },
   { id: "new8", title: "Exibhition Shoot & Edit", video: video7 },
   { id: "new9", title: "Exibhition Shoot & Edit", video: video8 },
     { id: "new10", title: "Exibhition Shoot & Edit", video: video9 },
       { id: "new11", title: "Exibhition Shoot & Edit", video: video10 },
         { id: "new12", title: "Exibhition Shoot & Edit", video: video11 },
          { id: "new15", title: "Event Shoot & Edit", video: video14 },    
 { id: "new16", title: "Event Shoot & Edit", video: video16 }, 
  { id: "new17", title: "Event Shoot & Edit", video: video17 }, 

  ],
  social: [
    { id: "influencer", title: "Influencer Reel",  video: influencerVideo },
  ],
  
  webdev: [],
};

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const items = data[categoryId] || [];

  const [activeVideo, setActiveVideo] = useState(null);

  // 🎬 REELS MODE
  if (
    (categoryId === "content" || categoryId === "shoots") &&
    items.length > 0
  ) {
    return (
      <ReelViewer
        items={items}
        startIndex={0}
        onClose={() => window.history.back()}
      />
    );
  }
  if (categoryId === "social") {
  return (
    <SocialShowcase
      onOpen={(id) => {
        console.log("open account:", id);
      }}
    />
  );
}

if (categoryId === "webdev") {
  return <WebsiteShowcase />;
}

 if (categoryId === "design") {
    return <DesignShowcase />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen text-white px-6 md:px-16 py-16"
    >
      <h1 className="text-4xl font-bold mb-12 capitalize">
        {categoryId}
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => item.video && setActiveVideo(index)}
            className="cursor-pointer"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-[280px] object-cover rounded-xl"
            />
            <div className="mt-2 text-sm text-neutral-400">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {activeVideo !== null && (
        <ReelViewer
          items={items}
          startIndex={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </motion.div>
  );
}