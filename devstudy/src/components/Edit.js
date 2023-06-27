import { useState, useEffect } from 'react';
import datas from "../components/datas";
import { useLocalStorageData } from "../constants/useLocalStorageData";

function Edit({ storageData }) {
  const [subject, setSubject] = useState('HTML/CSS');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const filteredDatas = datas.filter(data => data.id <= 5);
  const localStorageData = useLocalStorageData();
  const filteredData = localStorageData.filter(data => data.subject === subject);
  const titleOptions = filteredData.map(data => data.title);

  useEffect(() => {
    const selectedData = filteredData.find(data => data.title === title);
    if (selectedData) {
      setContent(selectedData.content);
      setUrl(selectedData.url);
    } else {
      setContent('');
      setUrl('');
    }
  }, [title, filteredData]);

  const handleTitleChange = (e) => {
    const selectedTitle = e.target.value;
    setTitle(selectedTitle);
  };

  const handleContentChange = (e) => {
    const selectedContent = e.target.value;
    setContent(selectedContent);
  };

  const handleUrlChange = (e) => {
    const selectedUrl = e.target.value;
    setUrl(selectedUrl);
  };

  return (
    <>
      <div className="edit-wrap">
        <article>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            {filteredDatas.map((data) => (
              <option key={data.id} value={data.title}>
                {data.title}
              </option>
            ))}
          </select>
        </article>
        <article>
          <select value={title} onChange={handleTitleChange}>
            {titleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </article>
        <article>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </article>
        <article>
          <textarea
            id="content"
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </article>
        <article>
          <input
            id="url"
            type="text"
            placeholder="URL"
            value={url}
            onChange={handleUrlChange}
          />
        </article>
      </div>
    </>
  );
}

export default Edit;





// import { useState } from 'react';
// import datas from "../components/datas";
// import { useLocalStorageData } from "../constants/useLocalStorageData";

// function Edit({storageData}){
//     const [subject, setSubject] = useState('HTML/CSS');
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [url, setUrl] = useState('');
//     const filteredDatas = datas.filter(data => data.id <= 5);
//     const localStorageData = useLocalStorageData();
//     const filteredData = localStorageData.filter(data => data.subject === subject);
//     const titleOptions = filteredData.map(data => data.title);
//     const txtTitle = JSON.stringify(storageData.filter(data => data.title === title));
//     const parsedData = JSON.parse(txtTitle);
//     const extractedTitle = parsedData[0]?.title;

//     return(
//         <>
//             <div className="edit-wrap">
//                 <article>
//                     <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//                         {filteredDatas.map((data) => (
//                         <option key={data.id} value={data.title}>
//                             {data.title}
//                         </option>
//                         ))}
//                     </select>
//                 </article>
//                 <article>
//                     <select value={title} onChange={(e) => setTitle(e.target.value)}>
//                         {titleOptions.map((option) => (
//                         <option key={option} value={option}>
//                             {option}
//                         </option>
//                         ))}
//                     </select>
//                 </article>
//                 <article>
//                     <input
//                         id="title"
//                         type="text"
//                         placeholder="Title"
//                         value={extractedTitle}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </article>
//                 {/* <article>
//                     <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//                         {storageData.map((data) => (
//                             <option key={data.id} value={data.subject}>
//                                 {data.subject}
//                             </option>
//                         ))}
//                     </select>
//                 </article> */}
//             </div>
//         </>
//     )
// }
// export default Edit;



// import { useEffect, useState } from 'react';
// import datas from "../components/datas";
// import { useLocalStorageData } from "../constants/useLocalStorageData";

// function Edit() {
//   const [subject, setSubject] = useState('HTML/CSS');
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [url, setUrl] = useState('');

//   const filteredDatas = datas.filter(data => data.id <= 5);
//   const localStorageData = useLocalStorageData();
//   const filteredData = localStorageData.filter(data => data.subject === subject);
//   const titleOptions = filteredData.map(data => data.title);
// console.log(filteredDatas)
// console.log(localStorageData)
// console.log(filteredData)
// console.log(titleOptions)
//   useEffect((e) => {
//     const selectedData = filteredData.find(data => data.title === e.target.title);
//     if (selectedData) {
//       setContent(selectedData.content);
//       setUrl(selectedData.url);
//     } else {
//       setContent('');
//       setUrl('');
//     }
//   }, [filteredData, title]);

//   const handleEditSubmit = (e) => {
//     e.preventDefault();

//     if (title === '') {
//       alert('제목을 입력하세요.');
//     } else if (content === '') {
//       alert('컨텐츠를 입력하세요.');
//     } else if (url === '') {
//       alert('URL을 입력하세요.');
//     } else {
//       const editedData = {
//         subject: subject,
//         title: title,
//         content: content,
//         url: url,
//         isCartState: false,
//       };

//       const dataIndex = localStorageData.findIndex(data => data.title === title);

//       if (dataIndex !== -1) {
//         localStorage.setItem(dataIndex.toString(), JSON.stringify(editedData));

//         setSubject('HTML/CSS');
//         setTitle('');
//         setContent('');
//         setUrl('');

//         if (window.confirm('동영상이 수정되었습니다. 홈 화면으로 이동하시겠습니까?')) {
//           window.location.href = '/';
//         }
//       } else {
//         alert('선택한 데이터를 찾을 수 없습니다.');
//       }
//     }
//   };
  
//   return (
//     <>
//       <div className="edit-wrap">
//         <article>
//           <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//             {filteredDatas.map((data) => (
//               <option key={data.id} value={data.title}>
//                 {data.title}
//               </option>
//             ))}
//           </select>
//         </article>
//         <article>
//           <select value={title} onChange={(e) => setTitle(e.target.value)}>
//             {titleOptions.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </article>
//     //     <article>
//     //       <input
    //         id="title"
    //         type="text"
    //         placeholder="Title"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //     </article>
    //     <article>
    //       <textarea
    //         id="content"
    //         name="title"
    //         placeholder="Content"
    //         value={content}
    //         onChange={(e) => setContent(e.target.value)}
    //       ></textarea>
    //     </article>
    //     <article>
    //       <input
    //         id="url"
    //         type="text"
    //         placeholder="URL"
    //         value={url}
    //         onChange={(e) => setUrl(e.target.value)}
    //       />
    //     </article>
    //     <div id="bottom">
    //       {/* <button id="submit-btn" onClick={handleEditSubmit}>
    //         수정하기
    //       </button> */}
    //     </div>
    //   </div>
//     </>
//   );
// }

// export default Edit;

// // import { useEffect, useState } from 'react';
// // import datas from "../components/datas";
// // import { useLocalStorageData } from "../constants/useLocalStorageData";

// // function Edit() {
// //   const [subject, setSubject] = useState('HTML/CSS');
// //   const [title, setTitle] = useState('');
// //   const [content, setContent] = useState('');
// //   const [url, setUrl] = useState('');

// //   const filteredDatas = datas.filter(data => data.id <= 5);
// //   const localStorageData = useLocalStorageData();
// //   const filteredData = localStorageData.filter(data => data.subject === subject);
// //   const titleOptions = filteredData.map(data => data.title);

// //   useEffect(() => {
// //     const selectedData = filteredData.find(data => data.title === title);
// //     if (selectedData) {
// //       setContent(selectedData.content);
// //       setUrl(selectedData.url);
// //     } else {
// //       setContent('');
// //       setUrl('');
// //     }
// //   }, [filteredData, title]);

// //   const handleEditSubmit = (e) => {
// //     e.preventDefault();

// //     if (title === '') {
// //       alert('제목을 입력하세요.');
// //     } else if (content === '') {
// //       alert('컨텐츠를 입력하세요.');
// //     } else if (url === '') {
// //       alert('URL을 입력하세요.');
// //     } else {
// //       const editedData = {
// //         subject: subject,
// //         title: title,
// //         content: content,
// //         url: url,
// //         isCartState: false,
// //       };

// //       const dataIndex = localStorageData.findIndex(data => data.title === title);

// //       if (dataIndex !== -1) {
// //         localStorage.setItem(dataIndex.toString(), JSON.stringify(editedData));

// //         setSubject('HTML/CSS');
// //         setTitle('');
// //         setContent('');
// //         setUrl('');

// //         if (window.confirm('동영상이 수정되었습니다. 홈 화면으로 이동하시겠습니까?')) {
// //           window.location.href = '/';
// //         }
// //       } else {
// //         alert('선택한 데이터를 찾을 수 없습니다.');
// //       }
// //     }
// //   };
  
// //   return (
// //     <>
// //       <div className="edit-wrap">
// //         <article>
// //           <select value={subject} onChange={(e) => setSubject(e.target.value)}>
// //             {filteredDatas.map((data) => (
// //               <option key={data.id} value={data.title}>
// //                 {data.title}
// //               </option>
// //             ))}
// //           </select>
// //         </article>
// //         <article>
// //           <select value={title} onChange={(e) => setTitle(e.target.value)}>
// //             {titleOptions.map((option) => (
// //               <option key={option} value={option}>
// //                 {option}
// //               </option>
// //             ))}
// //           </select>
// //         </article>
// //         <article>
// //           <input
// //             id="title"
// //             type="text"
// //             placeholder="Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //           />
// //         </article>
// //         <article>
// //           <textarea
// //             id="content"
// //             name="title"
// //             placeholder="Content"
// //             value={content}
// //             onChange={(e) => setContent(e.target.value)}
// //           ></textarea>
// //         </article>
// //         <article>
// //           <input
// //             id="url"
// //             type="text"
// //             placeholder="URL"
// //             value={url}
// //             onChange={(e) => setUrl(e.target.value)}
// //           />
// //         </article>
// //         <div id="bottom">
// //           <button id="submit-btn" onClick={handleEditSubmit}>
// //             수정하기
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Edit;

