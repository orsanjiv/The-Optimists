import React, { useState } from "react";
import axios from "axios";

const YouTubeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "AIzaSyCmU5sekqHNB-aOR3JT9ZYRyF_d3G393DE";
  const apiUrl = "https://www.googleapis.com/youtube/v3/search";

  const searchYouTube = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: searchQuery,
          part: "snippet",
          type: "video",
          key: apiKey,
        }
      });

      setSearchResults(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data: ", error);
    }
  };

  return (
    <div>
    <div className="flex items-center justify-center mb-7">
    <input
        type="text"
        className="block text-gray-700 text-sm p-2"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchYouTube} className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
      
      <div className="results">
        {searchResults.slice(0, 1).map((video) => (
          <iframe
            key={video.id.videoId}
            title={video.snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
