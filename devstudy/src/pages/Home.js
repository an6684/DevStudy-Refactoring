import datas from "../components/datas";

function Home(){
    const filteredDatas=datas.filter(data=>data.id<=5);

    return(
        <>
            {filteredDatas.map(data=>(
                <h3 key={data.id} value={data.title}>
                    {data.title}
                </h3>
            ))}
        </>
    )
}

export default Home;