import classes from "../Home/Home.module.scss";

export const Home = () => {
  return (
    <div className={classes.home_wrapper}>
      <h2 className={classes.main_heading}>
        Ўзбекистон Республикаси Олий ва Ўрта Махсус Таълим Вазирлиги Тошкент
        Давлат Иқтисодиёт Университети Сиртқи таълим бўлими{" "}
        <span className={classes.grade_name}>“Менежмент ва маркетинг”</span>{" "}
        кафедраси <span className={classes.subject_name}>“Маркетинг”</span>{" "}
        фанидан
      </h2>
      <h3 className={classes.theme_name}>
        "Иқтисодий таҳлилнинг предмети, вазифалари ва мазмуни" мавзусидаги
      </h3>
      <h1 className={classes.course_work}>КУРС ИШИ </h1>
      <div className={classes.names_div}>
        <div className={classes.teacher_name}>
          <span>Илмий раҳбар : </span>доц. Хакимов З.А.
        </div>
        <div className={classes.teacher_name}>
          <span>
            Бажарди: Сиртқи таълим бўлими “Маркетинг (тармоклар ва хизматлар)”
            таълим йўналиши ММР-51 гуруҳ талабаси  Насриддинова Мафтуна Шавкат
            кизи.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Home;
