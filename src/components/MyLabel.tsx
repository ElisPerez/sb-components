import './my-label.css';

export interface MyLabelProps {
  /**
   * The label to display.
   * @default 'My Label'
   * @example
   * <MyLabel label="My Label" />
   */
  label: string;
  /**
   * The size of the label.
   * @default 'normal'
   * @example
   * <MyLabel size="normal" />
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /** The color of the label. */
  color?: 'primary' | 'secondary' | 'tertiary';
  /** Whether the label should be all caps. */
  allCaps?: boolean;
  /** Custom color to apply to the label font. */
  fontColor?: string;
  /** Custom color to apply to the label background. */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  backgroundColor = 'transparent',
  color = 'primary',
  label = 'No label',
  size = 'normal',
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
