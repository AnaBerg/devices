import { Typography } from "..";

type Item = {
  title: string;
  description: string;
};

interface ListProps {
  items: Array<Item>;
}

const List: React.FC<ListProps> = ({ items }) => {
  if (items.length === 0) {
    return <></>;
  }

  return (
    <div
      style={{
        border: "1px solid #B2B2B2",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "5px",
      }}
    >
      <div>
        {items.map(({ description, title }, i) => (
          <div
            key={i}
            style={{
              borderBottom: items.length - 1 !== i ? "1px solid #B2B2B2" : "",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Typography variant="subtitle">{title}</Typography>
            <Typography variant="caption">{description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
