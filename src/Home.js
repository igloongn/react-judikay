import { useNavigate } from 'react-router-dom'

const styles = {
  Container: {

  }
}

function Home() {

const navigate = useNavigate()

  return (
    <div>
      <div styles={styles.Container}>
        <center>List of Products</center>
      </div>
      <br />
      <br />
      <center>
        <button onClick={() => navigate('products')} className='btn btn-success'>Products</button>
      </center>
    </div>

  );
}

export default Home;
