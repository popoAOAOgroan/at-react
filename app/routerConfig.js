
import HomeComponent from './HomeComponent.js';
import AddComponent from './AddComponent.js';

const allRouter = [
	{
        router: 'home',
        name: '我的资产',
        componentName: HomeComponent
    },
	{
        router: 'add',
        name: '添加资产',
        componentName: AddComponent
    }
];

const getRouter = function(_router){
	for(let n of allRouter){
		if (n.router == _router) {
			return n;
		}
	}
}

module.exports = getRouter;