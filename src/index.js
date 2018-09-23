class SmartCalculator {
  constructor(initialValue) {
   this.str=initialValue.toString();
   this.value=eval(this.str);   
  }
  toString(){
  	return this.value;
  }
  add(number) {
  	this.str=this.str+'+'+number;
    this.value=eval(this.str);
    return this;
   }
   subtract(number) {
    this.str=this.str+'-'+number;
    this.value=eval(this.str);
    return this;
   }
  multiply(number) {
    this.str=this.str+'*'+number;
    this.value=eval(this.str);
    return this;
   }
  devide(number) {
    this.str=this.str+'/'+number;
    this.value=eval(this.str);
    return this;
    }
  pow(number) {
  function add_pow(str,number)
  {
  	var regexp=/\+|\-|\*|\/|\,/gi;
  	var ind_reg=str.search(regexp);
  	if(ind_reg>=0)
	  	{
	  	str=str.split('').reverse().join('');
	  	ind_reg=str.search(regexp);
	   	if(str.search(/\,/)===ind_reg)
		  	{
		  	var ind=str.length-str.search(regexp);
		    str=str.split('').reverse().join('');
		    var base=str.substr(ind,1);
		    var i=ind+1;
		    while(str.substr(i,1)!==')')
		    {
		    	base+=str.substr(i,1);
		    	i++;
		    }

		   str=str.substr(0,ind)+'Math.pow('+base+','+number+')'+str.substr(i);	
		  		  	}
	  	else
		  	{
		 
		  	var ind=str.length-str.search(regexp);
		    str=str.split('').reverse().join('');
		    str=str.substr(0,ind)+'Math.pow('+str.substr(ind)+','+number+')';
		    }
	    }
    else
	    {
	    str='Math.pow('+str+','+number+')';
	    }
  	return str;
  }

    this.str=add_pow(this.str,number);
    this.value=eval(this.str);
    return this;
  }

}

 module.exports=SmartCalculator;