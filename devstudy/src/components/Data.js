import datas from '../components/datas';
import { useParams } from 'react-router-dom'
import Card from "./Card";
import RegisterClass from '../pages/RegisterClass';

const Data=()=>{
    const {dataId}=useParams();
    const data=datas.find(data=>data.id===parseInt(dataId));

    return (
      <>
        <section key={data.id}>
            <h3 key={data.id} value={data.title}>
                {data.title}
            </h3>
            <div className="wrap">
                {data.id <= 5 && <Card subject={data.title} />}
                {data.id === 6 && <RegisterClass />}
                {/* {data.id === 7 && <Archive />} */}
                {/* {data.id === 8 && <ManagerMode />} */}
            </div>
        </section>
      </>
    );
}

export default Data;