package com.cl.entity.view;

import com.cl.entity.PaotuijiedanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 跑腿接单
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
@TableName("paotuijiedan")
public class PaotuijiedanView  extends PaotuijiedanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public PaotuijiedanView(){
	}
 
 	public PaotuijiedanView(PaotuijiedanEntity paotuijiedanEntity){
 	try {
			BeanUtils.copyProperties(this, paotuijiedanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
