import { Helmet } from "react-helmet";

export default function MetaDecorator({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
