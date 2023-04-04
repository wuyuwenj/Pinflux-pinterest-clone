import './setting.css';
import { useEffect, useState } from 'react';

export default function PersonalInfoForm() {
    const [gender,setGender]=useState("Male")
    const handleChangeGender=(e)=>{
        setGender(e.target.value);
        
    }
    useEffect(() => {
        // console.log(gender, "current gender")
    },[gender])
    return(
        <div>
            <div>
                <h1 className='settingformtitle'>Personal information</h1>
            </div>
            <div>
                <p>Edit your basic personal info to improve recommendations. This information is private and will not be visible in your public profile.</p>
            </div>
            <div className='gender'>
                Gender
            </div>
            <div>
                <label class="container">Male
                    <input type="radio" name="radio" value="Male" defaultChecked={true} onChange={handleChangeGender}/>
                        <span class="checkmark"></span>
                </label>
                <label class="container">Female
                    <input type="radio" name="radio" value="Female" onChange={handleChangeGender} />
                        <span class="checkmark"></span>
                </label>
                <label class="container">Non-binary
                    <input type="radio" name="radio" value="Non-binary" onChange={handleChangeGender} />
                        <span class="checkmark"></span>
                </label>
            </div>
        </div>
    )
}