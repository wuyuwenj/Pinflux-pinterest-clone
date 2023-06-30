import "./setting.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function PersonalInfoForm() {
  const { id } = useParams();
  const [gender, setGender] = useState("Male");
  const history = useHistory();
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    history.push(`/user/${id}`);
  };
  return (
    <div>
      <div>
        <h1 className="settingformtitle">Personal information</h1>
      </div>
      <div>
        <p>
          Edit your basic personal info to improve recommendations. This
          information is private and will not be visible in your public profile.
        </p>
      </div>
      <div className="gender">Gender</div>
      <div>
        <label class="setting-container">
          Male
          <input
            type="radio"
            name="radio"
            value="Male"
            defaultChecked={true}
            onChange={handleChangeGender}
          />
          <span class="checkmark"></span>
        </label>
        <label class="setting-container">
          Female
          <input
            type="radio"
            name="radio"
            value="Female"
            onChange={handleChangeGender}
          />
          <span class="checkmark"></span>
        </label>
        <label class="setting-container">
          Non-binary
          <input
            type="radio"
            name="radio"
            value="Non-binary"
            onChange={handleChangeGender}
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <button
        type="submit"
        className="public-form-buttons"
        onClick={handleSubmit}
      >
        <p className="save-but-content">Save</p>
      </button>
    </div>
  );
}
