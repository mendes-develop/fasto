const { Fragment } = require("react");

const About = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h1>Guacamole</h1>
      <p>{props.name}</p>
    </Fragment>
  );
};
About.getInitialProps = async ({query}) => {
  const { disheID } = query
  console.log(query)
  return { query };
};

export default About;
