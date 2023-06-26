import datas from '../components/datas';
import { useParams } from 'react-router-dom'
import Card from "./Card";
import RegisterClass from '../pages/RegisterClass';
import { useLocalStorageData } from '../constants/useLocalStorageData';
import Archive from '../pages/Archive';

const Data=()=>{
    const {dataId}=useParams();
    const data=datas.find(data=>data.id===parseInt(dataId));
    // console.log(data.isCartState)
    const cartCard=useLocalStorageData().filter(data=>data.isCartState===true);
    console.log(cartCard)
    return (
      <>
        <section key={data.id}>
            <h3 key={data.id} value={data.title}>
                {data.title}
            </h3>
            <div className="wrap">
                {data.id <= 5 && <Card subject={data.title} />}
                {data.id === 6 && <RegisterClass />}
                {data.id === 7 && <Archive /> }
                {/* 찜한 순서대로 나열하는 방법찾아보기 */}
                {/* {data.id === 8 && <ManagerMode />} */}
            </div>
        </section>
      </>
    );
}

export default Data;