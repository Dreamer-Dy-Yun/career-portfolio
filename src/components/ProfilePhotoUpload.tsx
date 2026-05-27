import { ChangeEvent, useId, useState } from 'react';

const MAX_PHOTO_SIZE_BYTES = 5 * 1024 * 1024;

const ProfilePhotoUpload = () => {
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');
  const inputId = useId();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      setErrorMessage('');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setErrorMessage('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    if (file.size > MAX_PHOTO_SIZE_BYTES) {
      setErrorMessage('5MB 이하 이미지만 업로드할 수 있습니다.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPhotoPreview(reader.result);
        setErrorMessage('');
      }
    };
    reader.readAsDataURL(file);
  };

  const clearPhoto = () => {
    setPhotoPreview('');
    setErrorMessage('');
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    if (input) {
      input.value = '';
    }
  };

  return (
    <article className="photo-upload">
      <h3>대표 이미지</h3>
      <p>프로필용 이미지를 업로드해 상단 카드에 표시할 수 있습니다.</p>
      <label className="upload-control" htmlFor={inputId}>
        <span>이미지 선택</span>
        <input id={inputId} type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <div className="photo-preview-wrap">
        {photoPreview ? (
          <img className="photo-preview" src={photoPreview} alt="업로드한 프로필 이미지" />
        ) : (
          <div className="photo-preview-placeholder" aria-hidden="true">
            업로드된 이미지가 없습니다.
          </div>
        )}
      </div>
      {photoPreview ? (
        <button type="button" className="button-danger" onClick={clearPhoto}>
          삭제
        </button>
      ) : null}
      {errorMessage ? <p className="upload-error">{errorMessage}</p> : null}
    </article>
  );
};

export default ProfilePhotoUpload;

