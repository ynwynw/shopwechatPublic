package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShangpinleixingEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShangpinleixingView;


/**
 * 商品类型
 *
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface ShangpinleixingService extends IService<ShangpinleixingEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShangpinleixingView> selectListView(Wrapper<ShangpinleixingEntity> wrapper);
   	
   	ShangpinleixingView selectView(@Param("ew") Wrapper<ShangpinleixingEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShangpinleixingEntity> wrapper);
   	

}

