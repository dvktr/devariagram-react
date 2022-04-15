import avatarImg from '../../public/images/avatar.svg';

export default function Avatar({ src }) {
  const getAvatar = () => {
    if(src && src != 'undefined') {
      return src;
    }

    return avatarImg.src;
  }
  
  return (
    <img
      src={getAvatar()}
      alt='avatar'
      className='avatar'
    />
  )
}