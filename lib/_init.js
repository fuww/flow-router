// Export Router Instance
FlowRouter = new Router();
FlowRouter.Router = Router;
FlowRouter.Route = Route;

// react mounter checks for 'kadira:flow-router-ssr'
Package['kadira:flow-router-ssr'] = {FlowRouter};
