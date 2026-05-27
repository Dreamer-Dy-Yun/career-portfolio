import { profile } from '../data/profile';

const ProfilePhoto = () => {
  if (profile.photoUrl) {
    return (
      <figure className="profile-photo">
        <img src={profile.photoUrl} alt={`${profile.koreanName} 프로필 사진`} />
      </figure>
    );
  }

  return (
    <div className="profile-photo profile-photo--empty" aria-label="프로필 사진 예정 영역">
      <span>YD</span>
    </div>
  );
};

export default ProfilePhoto;
