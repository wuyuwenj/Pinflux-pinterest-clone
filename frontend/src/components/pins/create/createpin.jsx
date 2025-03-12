import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPin } from "../../../store/pins";
import "./createpin.css";
import Loading from "../../LoadingPage/Loading";
import { useHistory } from "react-router-dom";
const CreatePinPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [alttext, setAlttext] = useState("");
  const [deslink, setDeslink] = useState("");
  const [imgfile, setImgFile] = useState("");
  const [imgurl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const handleFile = (e) => {
    const file = e.target.files[0];
    // Save file for submission
    setImgFile(file);
    // Preview image
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = document.querySelector(".Uploadpic");
      setImgUrl(reader.result);
      img.src = reader.result;
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData();
    formData.append("pin[title]", title);
    formData.append("pin[body]", body);
    formData.append("pin[alt_text]", alttext);
    formData.append("pin[destination_link]", deslink);
    formData.append("pin[author_id]", sessionUser.id);
    formData.append("pin[image]", imgfile);

    dispatch(createPin(formData))
      .then(() => {
        setLoading(false);
      })
      .then(() => {
        history.push("/");
      });
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <div className="pagebg">
        <form className="formbox" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="icons">
                    <button className="circleButton" type="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </td>
                <td className="redbut">
                  {/* <DropDown></DropDown> */}

                  <input className="saveButton" type="submit" value="Save" />
                </td>
              </tr>
              <tr>
                <td className="left">
                  <div className="dotline">
                    <img className="Uploadpic" />
                  </div>

                  <input
                    className="uploadButton"
                    type="file"
                    onChange={handleFile}
                  ></input>

                  <p>
                    <i className="fa-solid fa-circle-up"></i>
                  </p>
                  <p className="uploadins">Drag and drop or click to upload</p>
                  <p className="recommend">
                    We recommend using high-quality .jpg files under 20MB
                  </p>
                </td>

                <td className="right">
                  <input
                    className="titleInput"
                    type="text"
                    value={title}
                    placeholder="Add your title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  ></input>
                  <br />
                  <br />
                  <div>
                    {sessionUser.imgurl ? (
                      <img className="pfpPic" src={sessionUser.imgurl} alt="" />
                    ) : (
                      <div className="Nopic">{sessionUser.username[0]}</div>
                    )}

                    {" " + sessionUser.username}
                  </div>
                  <br />
                  <br />
                  <input
                    className="bodyInput"
                    type="text"
                    value={body}
                    placeholder="   Tell everyone what your Pin is about"
                    onChange={(e) => setBody(e.target.value)}
                  ></input>
                  <br />
                  <input
                    className="alttextInput"
                    type="text"
                    value={alttext}
                    placeholder="Explain what people can see in the Pin"
                    onChange={(e) => setAlttext(e.target.value)}
                  ></input>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <input
                    className="deslinkInput"
                    type="text"
                    value={deslink}
                    placeholder="Add destination link"
                    onChange={(e) => setDeslink(e.target.value)}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
};

export default CreatePinPage;
