export default class Index extends React.Component {
  state = {}

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({now: new Date().toLocaleString()})
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <p>Welcome to Next.js! {this.state.now ? `now: ${this.state.now}` : ''}
        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
      </p>
    )
  }
}
