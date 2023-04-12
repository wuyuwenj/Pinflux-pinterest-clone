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
        </div>
       
    )
}

export default Splash;