import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

type IProps = RouteComponentProps<any> & {
  location: Location,
  children: React.ReactNode,
}

class ScrollToTopWhenRouteChange extends React.PureComponent<IProps, {}> {
  render() {
    return this.props.children
  }
  componentDidUpdate(prevProps: IProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
}

export default withRouter(ScrollToTopWhenRouteChange)
