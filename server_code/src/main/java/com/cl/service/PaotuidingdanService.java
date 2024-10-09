package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.PaotuidingdanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PaotuidingdanView;


/**
 * 跑腿订单
 *
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface PaotuidingdanService extends IService<PaotuidingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<PaotuidingdanView> selectListView(Wrapper<PaotuidingdanEntity> wrapper);
   	
   	PaotuidingdanView selectView(@Param("ew") Wrapper<PaotuidingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<PaotuidingdanEntity> wrapper);
   	

}

