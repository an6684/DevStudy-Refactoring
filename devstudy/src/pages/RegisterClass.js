import datas from "../components/datas";
import '../styles/RegisterClass.css';

function RegisterClass(){
    const filteredDatas=datas.filter(data=>data.id<=5);
    
    return(
        <>
            <article>
                <select id="subject">
                    {filteredDatas.map(data=>(
                        <option key={data.id} value={data.title}>
                            {data.title}
                        </option>
                    ))}
                </select>
            </article>
            <article>
                <input id="title" type="text" placeholder="Title" />
            </article>
            <article>
                <textarea id="content" name="title" placeholder="Content"></textarea>
            </article>
            <article>
                <input id="url" type="text" placeholder="url" />
            </article>
            <div id="bottom">
                <button id="submit-btn">submit</button>
            </div>
        </>
    )
}

export default RegisterClass;