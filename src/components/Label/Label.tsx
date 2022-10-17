import "./label.css";

export interface LabelProps {
  /**
   * The size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * The label text
   */
  label: string;
  /**
   * Whether the label should be all caps
   */
  allCaps?: boolean;
  /**
   * The label color
   */
  variant: "primary" | "secondary" | "tertiary";

  /**
   * A label custom color
   */
  customColor?: string;
}

const Label = ({
  size = "normal",
  label = "No label",
  variant = "primary",
  allCaps,
  customColor,
}: LabelProps): JSX.Element => {
  return (
    <span
      className={`label ${size} text-${variant}`}
      style={{ color: customColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default Label;
