import profilePic from './assets/profile.png';
function Card() {
  return (

    <div className="card">
        <img className="card-image" alt="profile picture" src={profilePic}></img>
        <h2 className="card-title">Liu</h2>
        <p className="card-text">Blockchian  Developer</p>
    </div>

    
  );
}
export default Card;