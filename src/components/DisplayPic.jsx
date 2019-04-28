import React from 'react';
import aportrait1 from '../img/display-pics/aportrait1.JPG';
import aportrait2 from '../img/display-pics/aportrait2.JPG';
import aportrait3 from '../img/display-pics/aportrait3.JPG';
import aportrait4 from '../img/display-pics/aportrait4.JPG';
import aportrait5 from '../img/display-pics/aportrait5.JPG';
import aportrait6 from '../img/display-pics/aportrait6.JPG';

class DisplayPic extends React.Component {


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getDisplayPic(){
        let displayPics = [ aportrait1, aportrait2, aportrait3, aportrait4, aportrait5, aportrait6 ];
        return displayPics[ this.getRandomInt( 0 , 5) ]
    }

    render(){
        return(
            <div>
                <img src={ this.getDisplayPic() } className="mb-3"></img>
            </div>
        )
    }

}

export default DisplayPic;