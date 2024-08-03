function ProfilePicture() {
  let picfile = "/src/assets/profile.png";

  const handlepicClick = (event) => {
    event.target.style.display="none";
  };

  return <img onClick={handlepicClick} src={picfile}></img>;
}

export default ProfilePicture;
