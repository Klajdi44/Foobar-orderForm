function customInterval(funcName, time) {
	funcName();
	return setInterval(funcName, time);
}
export default customInterval;