package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShensulanmuEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShensulanmuView;


/**
 * 申诉栏目
 *
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface ShensulanmuService extends IService<ShensulanmuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShensulanmuView> selectListView(Wrapper<ShensulanmuEntity> wrapper);
   	
   	ShensulanmuView selectView(@Param("ew") Wrapper<ShensulanmuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShensulanmuEntity> wrapper);
   	

}

