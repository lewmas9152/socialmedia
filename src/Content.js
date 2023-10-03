import ThemeSwitcher from "./ThemeSwitcher";



const Content = () => {
  return (
    <main className="container">
      <header>
        <h1>Social Media Dashboard</h1>
        <p> Total Followers: 23,004</p>
        <hr />
        <div className="dark">
          <label htmlFor="darkMode">Dark Mode</label>
          <ThemeSwitcher />
        </div>
      </header>
      <div className="card">
      <div className="subscribers">
      <div className="facebook">
          <a href="#" className="link">
            <img src="./icon-facebook.svg" alt="facebook_icon" />
            <p>@nathanf</p>
          </a>
          <p className="num">1987</p>
          <p className="followers">Followers</p>
          <p className="today">
            <img src="./icon-up.svg" alt="up-icon" />
            12 Today
          </p>
        </div>

        <div className="Twitter">
          <a href="#" className="link">
            {" "}
            <img src="./icon-twitter.svg" alt="twitter_icon" />
            <p>@nathanf</p>
          </a>
          <p className="num">1044</p>
          <p className="followers">Followers</p>
          <p className="today">
            <img src="./icon-up.svg" alt="up-icon" />
            99 Today
          </p>
        </div>

        <div className="Instagram">
          <a href="#" className="link">
            <img src="./icon-instagram.svg" alt="instagram_icon" />
            <p>@realnathanf</p>
          </a>
          <p className="num">11k</p>
          <p className="followers">Followers</p>
          <p className="today">
            {" "}
            <img src="./icon-up.svg" alt="up-icon" />
            1099 Today
          </p>
        </div>

        <div className="Youtube">
          <a href="#" className="link">
            {" "}
            <img src="./icon-youtube.svg" alt="youtube_icon" />
            <p>Nathan F.</p>
          </a>
          <p className="num">8239</p>
          <p className="followers">subscribers</p>
          <p className="today">
            <img src="./icon-down.svg" alt="down-icon" />
            144 Today
          </p>
        </div>
        </div> 

     
        <h2>Overview - Today</h2>
        <div className="overview">
         
          <div className="reactions">
            <p class="link">
              Page Views <img src="./icon-facebook.svg" alt="facebook_icon" />
            </p>
            <p className="num">87</p>
            <p className="today">
              <img src="./icon-up.svg" alt="up-icon" />
              3%
            </p>
          </div>
          <div className="reactions">
            <p class="link"> 
              Likes <img src="./icon-facebook.svg" alt="facebook_icon" />
            </p>
            <p className="num">52</p>
            <p className="today">
              <img src="./icon-down.svg" alt="down-icon" />
              2%
            </p>
          </div>
          <div className="reactions">
            <p class="link">
              Likes <img src="./icon-instagram.svg" alt="instagram_icon" />
            </p>
            <p className="num">5462</p>
            <p className="today">
              <img src="./icon-up.svg" alt="up-icon" />
              2257%
            </p>
          </div>
          <div className="reactions">
            <p class="link">
              Profile Views{" "}
              <img src="./icon-instagram.svg" alt="instagram_icon" />
            </p>
            <p className="num">52k</p>
            <p className="today">
              <img src="./icon-up.svg" alt="up-icon" />
              1375%
            </p>
          </div>
          <div className="reactions">
            <p class="link">
              Retweets <img src="./icon-twitter.svg" alt="twitter_icon" />
            </p>
            <p className="num">117</p>
            <p className="today">
              <img src="./icon-up.svg" alt="up-icon" />
              303%
            </p>
          </div>
          <div className="reactions">
            <p class="link">
              Likes <img src="./icon-twitter.svg" alt="twitter_icon" />
            </p>
            <p className="num" >507</p>
            <p className="today">
              <img src="./icon-up.svg" alt="up-icon" />
              553%
            </p>
          </div>
          <div className="reactions">
            <p class="link">
              Likes <img src="./icon-youtube.svg" alt="youtube_icon" />
            </p>
            <p className="num">107</p>
            <p className="today">
              <img src="./icon-down.svg" alt="down-icon" className="youtubeDown" />
              19%
            </p>
          </div>
          <div className="reactions">
            <p class="link">
              total views <img src="./icon-youtube.svg" alt="youtube_icon" />
            </p>
            <p className="num">1407</p>
            <p className="today">
              <img src="./icon-down.svg" alt="down-icon" className="youtubeDown" />
              12%
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
