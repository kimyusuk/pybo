//넘어온 값이 빈 값인지 체크
//[],{}도 빈 값으로 처리
const empty = function(value){
    if("" == value || null == value || undefined == value
    || (value != null && typeof value == "object" && !Object.keys(value).length) ){
        return true;
    }else{
        return false;
    }
};