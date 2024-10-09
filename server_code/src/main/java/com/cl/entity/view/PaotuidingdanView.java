package com.cl.entity.view;

import com.cl.entity.PaotuidingdanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 跑腿订单
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
@TableName("paotuidingdan")
public class PaotuidingdanView  extends PaotuidingdanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public PaotuidingdanView(){
	}
 
 	public PaotuidingdanView(PaotuidingdanEntity paotuidingdanEntity){
 	try {
			BeanUtils.copyProperties(this, paotuidingdanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
