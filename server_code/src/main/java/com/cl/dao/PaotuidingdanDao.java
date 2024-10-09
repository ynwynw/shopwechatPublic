package com.cl.dao;

import com.cl.entity.PaotuidingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PaotuidingdanView;


/**
 * 跑腿订单
 * 
 * @author 
 * @email 
 * @date 2024-02-01 11:17:28
 */
public interface PaotuidingdanDao extends BaseMapper<PaotuidingdanEntity> {
	
	List<PaotuidingdanView> selectListView(@Param("ew") Wrapper<PaotuidingdanEntity> wrapper);

	List<PaotuidingdanView> selectListView(Pagination page,@Param("ew") Wrapper<PaotuidingdanEntity> wrapper);
	
	PaotuidingdanView selectView(@Param("ew") Wrapper<PaotuidingdanEntity> wrapper);
	

}
