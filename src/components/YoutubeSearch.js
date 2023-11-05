import React, { useState } from "react";
import axios from "axios";
import {AiOutlineSearch} from 'react-icons/ai'
import {BiLogoYoutube} from 'react-icons/bi'


const YouTubeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = "AIzaSyCmU5sekqHNB-aOR3JT9ZYRyF_d3G393DE"; // Replace with your YouTube Data API Key

  const searchYouTube = async () => {
    try {
      const response = await axios.get(
        https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&part=snippet&type=video&key=${apiKey}
      );

      setSearchResults(response.data.items);
    } catch (error) {
      console.error("Error fetching YouTube data: ", error);
    }
  };

  return (
    <div>

        <div className="flex justify-between items-center bg-gray-600">
                <BiLogoYoutube size={25} style={{color:'red'}}/>
            <input
                type="text"
                placeholder="Enter your search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AiOutlineSearch size={25} onClick={searchYouTube}/>
        </div>
      
      <div className="results">
        {searchResults.map((video) => (
          <iframe
            key={video.id.videoId}
            title={YouTube Video: ${video.snippet.title}}
            width="560"
            height="315"
            src={https://www.youtube.com/embed/${video.id.videoId}}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
    );
};

export default YouTubeSearch;