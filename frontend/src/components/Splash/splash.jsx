import "./splash.css"
const Splash = () => {
    



    return(
        <div className="SplashPage">
             <div className='splashTitles'>
            <p><b> Get your next</b></p>
            <div className="splashtitle1"> <b>weeknight dinner idea</b> </div>
        </div>
            <div className="image-container">
                <div className="splish-columns" id="column1">
                    <div className="pic1">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea1.jpg" />
                    </div>
                </div>
            
            
                <div className="splishColumns" id="column2">
                <div className="pic2">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea2.jpg" />
                </div>
                </div>
                <div className="splishColumns" id="column3">
                <div className="pic3">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea3.jpg" />
                </div>
                </div>
                <div className="splishColumns" id="column4">
                <div className="pic4">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea4.jpg" />
                </div>
                    </div>
                <div className="splishColumns" id="column5">
                <div className="pic5">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea5.jpg" />
                </div>
                        </div>
                <div className="splishColumns" id="column6">
                <div className="pic6">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea6.jpg" />
                </div>
                            </div>
                <div className="splishColumns" id="column7">
                <div className="pic7">
                    <img className="splishPic" src="https://pinflux-prod.s3.us-west-1.amazonaws.com/dinnerIdea7.jpg" />
                </div>
                </div>

        </div>
        <div className="footer">
            <div>
            Here is how it works      
            </div>
            <svg class="aUZ R19 U90 kVc" height="12" width="12" viewBox="0 0 24 24" aria-label="arrow down icon" role="img">
<path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
</svg>
        </div>
        </div>
       
    )
}

export default Splash;