const CircleIcon = (props) => {
  const { height, width, pointerHover } = props;

  return (
    <span className={pointerHover && "hover-pointer"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-circle"
        viewBox="0 0 16 16"
        style={{ height, width }}
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      </svg>
    </span>
  );
};
CircleIcon.defaultProps = {
  pointerHover: true,
  height: 20,
  width: 20,
};
export default CircleIcon;
