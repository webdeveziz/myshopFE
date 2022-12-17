import ContentLoader from 'react-content-loader'
import { FC } from 'react'

const Scleton: FC = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={263}
    viewBox="0 0 500 263"
    backgroundColor="#ded9d9"
    foregroundColor="#ecebeb"
    {...props}
    style={{
      background: '#fff',
      marginLeft: '35px',
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '10px',
      width: '500px',
      height: '263px',
    }}
  >
    <rect x="8" y="-4" rx="10" ry="10" width="130" height="170" />
    <rect x="7" y="198" rx="6" ry="6" width="130" height="49" />
    <rect x="168" y="0" rx="5" ry="5" width="300" height="71" />
    <rect x="169" y="93" rx="3" ry="3" width="92" height="22" />
    <rect x="169" y="135" rx="3" ry="3" width="92" height="22" />
    <rect x="271" y="134" rx="3" ry="3" width="92" height="22" />
    <rect x="372" y="133" rx="3" ry="3" width="92" height="22" />
    <rect x="169" y="182" rx="6" ry="6" width="300" height="70" />
  </ContentLoader>
)

export default Scleton
