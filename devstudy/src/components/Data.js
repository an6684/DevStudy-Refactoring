import datas from '../components/datas';
import { useParams } from 'react-router-dom'

const Data=()=>{
    const {dataId}=useParams();
    const data=datas.find(data=>data.id===parseInt(dataId));

    return (
      <div>
        <h2>{data.title}</h2>
        <div className="wrap">
          {typeof data.content==='function'?<data.content/>:<p>{data.content}</p>}
        </div>
      </div>
    );
}

export default Data;