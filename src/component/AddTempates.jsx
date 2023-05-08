// import styles from "./Parsing.module.css";

// const AddTemplate = () => {
//   //console.log(buttonDecoration);
//   return (
//     <div className={styles.ParsingMainDiv}>
//       <div className={styles.innerDiv}>
//         <div>
//           <form action="add-template" method="post">

//           {data.map((item) => (
//             <div className={styles.DynamicPeaceMainDiv} key={++item.id}>
//               <textarea
//                 placeholder="Адреса (каждый с новой строки)"
//                 name="address"
//                 key={item.id}
//                 className={styles.DynamicMainTextArea}
//                 cols="30"
//                 rows="10"
//               ></textarea>
//               {[...Array(item.count)].map((_, index) => (
//                 <div className={styles.div} key={index}>
//                   <input
//                     type="text"
//                     className={styles.inputs}
//                     placeholder={`Cсылка ${++index}`}
//                     name="url_link"
//                   />
//                   <input
//                     type="text"
//                     className={styles.inputs}
//                     name="product"
//                     placeholder={`Название товара ${index}`}
//                   />
//                   <textarea
//                     placeholder={`Ссылки на конкурентов (каждая с новой строки) ${index}`}
//                     name="comment"
//                     cols="30"
//                     className={styles.secondTextarea}
//                     rows="10"
//                   ></textarea>
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div>
//             <input
//               name="name_pattern"
//               className={styles.inputs}
//               placeholder={"Название шаблона"}
//             />

//             <button className={styles.Button}>Сохранить</button>
//           </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTemplate;
