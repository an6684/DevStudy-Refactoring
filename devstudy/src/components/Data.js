import datas from '../components/datas';
import { useParams } from 'react-router-dom'

const Data=()=>{
    const {dataId}=useParams();
    const data=datas.find(data=>data.id===parseInt(dataId));

    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>
    );
}

export default Data;