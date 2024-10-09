package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.PaotuijiedanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PaotuijiedanView;


/**
 * 跑腿接单
 *
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface PaotuijiedanService extends IService<PaotuijiedanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<PaotuijiedanView> selectListView(Wrapper<PaotuijiedanEntity> wrapper);
   	
   	PaotuijiedanView selectView(@Param("ew") Wrapper<PaotuijiedanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<PaotuijiedanEntity> wrapper);
   	

}

