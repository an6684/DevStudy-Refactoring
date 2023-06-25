import datas from '../components/datas';
import { useParams } from 'react-router-dom'
import Card from "./Card";

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
                <Card subject={data.title}/>
            </div>
        </section>
      </>
    );
}

export default Data;