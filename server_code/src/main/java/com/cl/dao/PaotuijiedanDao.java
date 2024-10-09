package com.cl.dao;

import com.cl.entity.PaotuijiedanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PaotuijiedanView;


/**
 * 跑腿接单
 * 
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface PaotuijiedanDao extends BaseMapper<PaotuijiedanEntity> {
	
	List<PaotuijiedanView> selectListView(@Param("ew") Wrapper<PaotuijiedanEntity> wrapper);

	List<PaotuijiedanView> selectListView(Pagination page,@Param("ew") Wrapper<PaotuijiedanEntity> wrapper);
	
	PaotuijiedanView selectView(@Param("ew") Wrapper<PaotuijiedanEntity> wrapper);
	

}
