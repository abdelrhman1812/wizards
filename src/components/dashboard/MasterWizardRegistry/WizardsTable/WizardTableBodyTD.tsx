const WizardTableBodyTD = ({
  color,
  content,
}: {
  color?: string;
  content: string;
}) => {
  return <td className={`px-6 py-5 whitespace-nowrap ${color}`}>{content}</td>;
};

export default WizardTableBodyTD;
