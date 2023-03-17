import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'pramodkrishnaa.netlify.app',
    href: 'https://pramodkrishnaa.netlify.app',
  },
  {
    social: 'email',
    link: 'pramod.krish2002@gmail.com',
    href: 'mailto:pramod.krish2002@gmail.com',
  },
  {
    social: 'github',
    link: 'Pramod-Krishnaa',
    href: 'https://github.com/Pramod-Krishnaa',
  },
  {
    social: 'linkedin',
    link: 'Prmaod-Krishnaa',
    href: 'https://www.linkedin.com/in/pramod-krishnaa/',
  },
  
  {
    social: 'instagram',
    link: '_p.ra.mod_',
    href: 'https://www.instagram.com/_p.ra.mod_/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
