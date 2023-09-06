import styles from "@/styles/components/product/home/menubar.module.scss";
import { ItemType, IItem } from "@/typings/interfaces/items/items.interface";

interface IProps {
  changeMenuCategorySelection: (category: ItemType) => void;
  activeMenuCategoryData: {
    itemData: IItem[];
    activeCategory: ItemType;
  };
}

function Menubar({
  changeMenuCategorySelection,
  activeMenuCategoryData,
}: IProps) {
  return (
    <nav className={styles.menubar}>
      <ul>
        <li
          className={
            activeMenuCategoryData.activeCategory === "SANDWICH"
              ? styles.active
              : ""
          }
          onClick={() => {
            changeMenuCategorySelection("SANDWICH");
          }}
        >
          Sandwich
        </li>
        <li
          className={
            activeMenuCategoryData.activeCategory === "KHARI"
              ? styles.active
              : ""
          }
          onClick={() => {
            changeMenuCategorySelection("KHARI");
          }}
        >
          Khari
        </li>
        <li
          className={
            activeMenuCategoryData.activeCategory === "PASTRIES"
              ? styles.active
              : ""
          }
          onClick={() => {
            changeMenuCategorySelection("PASTRIES");
          }}
        >
          Pastries
        </li>
        <li
          className={
            activeMenuCategoryData.activeCategory === "OTHERS"
              ? styles.active
              : ""
          }
          onClick={() => {
            changeMenuCategorySelection("OTHERS");
          }}
        >
          Others
        </li>
        <li
          className={
            activeMenuCategoryData.activeCategory === "NON-FOOD"
              ? styles.active
              : ""
          }
          onClick={() => {
            changeMenuCategorySelection("NON-FOOD");
          }}
        >
          Non Food
        </li>
        {/* <div className={styles.underline} /> */}
      </ul>
    </nav>
  );
}

export default Menubar;
